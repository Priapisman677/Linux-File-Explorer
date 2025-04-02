import { echoSomething, freeCommand } from "@/actions/actions";
import LinuxCli from "../../components/LinuxCli";

export default function Home() {
  return (
    <div className="p-6 flex-col flex gap-5">
      <div className="border border-[#4e4e4e] bg-[#313131] p-3 rounded-sm">
        <h1 className="font-bold"> Echo something </h1>
        <div> <LinuxCli linuxAction={echoSomething}></LinuxCli></div>
      </div>

      <div className="border border-[#4e4e4e] bg-[#313131] p-3 rounded-sm">
        <h1 className="font-bold"> Free command </h1>
        <div> <LinuxCli linuxAction={freeCommand}></LinuxCli></div>
      </div>
    </div>
  );
}
