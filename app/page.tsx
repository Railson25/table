import { AssociateTable } from "@/components/associates-table";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col">
      Pagina inicial
      <Separator className="my-10" />
      <AssociateTable />
      <div className="my-10">
        <Link href="/new" className="my-10 bg-gray-300 p-5 rounded-full">
          register
        </Link>
      </div>
    </div>
  );
}
