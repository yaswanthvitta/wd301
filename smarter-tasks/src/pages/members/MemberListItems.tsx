

// First, I'll import the useProjectsState custom hook to access projects state.
import { useMembersState } from "../../context/members/context";
export default function MemberListItems() {

  // I'll define a new constant called `state`, to call the useProjectsState() hook, 
  // and get access to projects state.
  const state: any = useMembersState();

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
        <div key={member.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.email}</h5>
          </div>
        </div>
      ))}        
    </>
  );
}