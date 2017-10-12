declare namespace imports {

    namespace misc {

        class util {

            static findUrls(str:string)
            static trySpawn(argv:string[], doNotReap:boolean)
            static trySpawnCommandLine(command_line:string)
            static spawn(args:string[])
            static spawn_async(args:string[],callback:(param)=>void)
            static spawnCommandLine(command_line:string)
            static spawnCommandLineAsync(command_line:string, callback?:()=>void, errback?:()=>void)
            static killall(processName:string)
            static fixupPCIDescription(desc:string)
            static latinise(string:string)

        }

    }

}