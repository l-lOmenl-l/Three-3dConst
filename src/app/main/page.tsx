import Header from "@/widgets/main/Header";
import Canvas from "@/widgets/main/workspace/Canvas";
import SidebarBuild from "@/widgets/main/workspace/SidebarBuild";




const MainRoute = () => {

    return (  
        <div className="flex flex-col h-[100%]">
            <Header/>
            <main className="flex h-[92%]">
                <SidebarBuild/>
               
            </main>
        
        </div>
        
    );
}
 
export default MainRoute;