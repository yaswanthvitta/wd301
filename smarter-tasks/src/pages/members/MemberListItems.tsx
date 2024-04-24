

// First, I'll import the useProjectsState custom hook to access projects state.
import { useMembersState, useMembersDispatch } from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";

export default function MemberListItems() {

  // I'll define a new constant called `state`, to call the useProjectsState() hook, 
  // and get access to projects state.
  const state: any = useMembersState();
  const dispatchMembers = useMembersDispatch();
  const handleDelete = (id: number) => {
    deleteMember(dispatchMembers, id);
  };

  // Next, I'll destructure the state object to gain access to projects, 
  // isLoading, isError and errorMessage property.
  const { members, isLoading, isError, errorMessage } = state
  console.log(members);

  // If `isLoading` is true, and there are no projects, in that case, 
  // I'll show a loading text
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  
// Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  // And finally I'll iterate over the projects object to show the 
  // individual projects card.
  return (
    <>
      {members.map((member: any) => (
        <div key={member.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 member">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.email}</h5>
          <button
            type="button"
            onClick={() => handleDelete(member.id)}
            className="px-4 py-2 text-sm font-medium text-white bg-red-700 rounded-md hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Delete
          </button>
        </div>

      ))}        
    </>
  );
}