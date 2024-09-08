
import { getUser } from "@/app/actions"
export default async function Page() {
  const user = await getUser()
  return (<>
    <div>
      Profile:<br />{
        JSON.stringify(user)
      }
    </div>
  </>)
}
