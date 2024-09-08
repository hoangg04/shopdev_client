
import { redirect } from "next/navigation";
import { VerifyForm } from '@/components/forms/VerifyForm';

export default async function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	return (<>
		<VerifyForm id={id} />
	</>
	)
}
