import { CommunityForm } from "@/components/CommunityForm/CommunityForm";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const CreateCommunityPage = async () => {
  const session = await getServerAuthSession();
  if (!session) {
    redirect("/get-started");
  }
  return (
    <div className="mx-auto lg:col-span-9 max-w-2xl flex-grow flex flex-col justify-center w-full px-4 sm:px-6">
      <div className="bg-neutral-900 text-neutral-700 shadow-xl">
        <CommunityForm
          defaultValues={{
            name: "",
            city: "",
            country: "",
            coverImage: "",
            description: "",
            excerpt: "",
          }}
        />
      </div>
    </div>
  );
};

export default CreateCommunityPage;