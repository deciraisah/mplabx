
var box = document.getElementById('boxAppear');
function moveBox(a){
    //get coordinates
    var x,y,a;
    x = event.clientX;
    y = event.clientY;
    
    //change text of div element
    switch (a){
        case 1:
        document.getElementById("text").innerHTML = "<b>New File</b> - CTRL + N, Opens up a new file.";
        break;

        case 2:
        document.getElementById("text").innerHTML = "<b>New Project</b> - CTRL + Shift + N, "+
        "Creates a new project with the New Project Wizard.";
        break;

        case 3:
        document.getElementById("text").innerHTML = "<b>Open Project</b> - CTRL + Shift + O, Opens an existing project.";
        break;

        case 4:
        document.getElementById("text").innerHTML = "<b>Save All</b> - CTRL + Shift + S, Saves all open files.";
        break;

        case 5:
        document.getElementById("text").innerHTML = "<b>Undo</b> - CTRL + Z, Reverses (one at a time) a series of editor actions, except Save.";
        break;

        case 6:
        document.getElementById("text").innerHTML = "<b>Redo</b> - CTRL + Y, Reverses (one at a time) a series of Undo commands.";
        break;

        case 7:
        document.getElementById("text").innerHTML = "<b>Set Project Configuration</b> - By default, this will show default. However, if you create a new configuration, its name will show up here as well allowing you to rapidly switch between multiple configurations. For example, one configuration may use the ICD3 and another the simulator.";
        break;

        case 8:
        document.getElementById("text").innerHTML = "<b>Build Project</b> - Builds the project using the compiler/assembler selected in the Project Properties. The Build command in MPLAB X is roughly equivalent to the Make command in MPLAB 8. The make utility will build only the files in the project that have changed since the last build. Click on down arrow for other related options.";
        break;

        case 9:
        document.getElementById("text").innerHTML = "<b>Clean and Build Project</b> - Deletes files from previous builds and then builds the all project files. Click on down arrow for other related options.";
        break;

        case 10:
        document.getElementById("text").innerHTML = "<b>Run Project</b> - Continue running a project that is being debugged.";
        break;

        case 11:
        document.getElementById("text").innerHTML = "<b>Make and Program Target Project</b> - Builds project in release mode then programs the PIC® Microcontroller. Click on down arrow for other related options.";
        break;

        case 12:
        document.getElementById("text").innerHTML = "<b>Read Device Memory</b> - Reads target device memory and loads into MPLAB X IDE. Click on down arrow for other related options.";
        break;

        case 13:
        document.getElementById("text").innerHTML = "<b>Hold in Reset</b> - Unlike the other toolbar buttons, this is a toggle switch. When it is pressed, it will assert the reset line to prevent the target from running. This button is most useful in conjunction with the Program Target button. After programming the target, Hold in Reset may be used to release the target board to run without having to disconnect the programmer.";
        break;

        case 14:
        document.getElementById("text").innerHTML = "<b>Debug Project</b> - Builds the project in debug mode (links in the debug executive), programs the target and runs the ­project on the target using the debugger selected in the project properties.";
        break;

        case 15:
        document.getElementById("text").innerHTML = "<b>MPLAB Code Configurator (MCC)</b> - Plugin that you can download.";
        break;

        /*case 16:
        document.getElementById("text").innerHTML = "<b>MPLAB Code Configurator (MCC)</b> - Plugin that you can download.";
        break;*/
        
        case 17:
        document.getElementById("text").innerHTML = "<b>Project Dashboard</b> - displays the current status of the project including checksum, memory usage, and debug information as well as other useful information..";
        break;
        case 18:
        document.getElementById("text").innerHTML = "<b>Menu Ribbon</b>";
        break;
        case 19:
        document.getElementById("text").innerHTML = "<b>Project Window</b> - Projects Window has three tabs: Projects, Files, and Services.";
        break;
        case 20:
        document.getElementById("text").innerHTML = "<b>Editing Icons</b>";
        break;
        case 21:
        document.getElementById("text").innerHTML = "<b>Output Window</b> - When the user opens a window in order to observe the contents of the project, the window is opened as a tab in this window."+ 
        "Examples of new windows opening in the output window include the Watches Window, Variables Window, and Debug Disassembly Window, among others." +
        "During a project build the compiler displays the build status in the Output Window.";
        break;
        case 22:
        document.getElementById("text").innerHTML = "<b>Editing Window</b> - Find your source codes here.";
        break;

        default:
        alert("No text available");
    }

    boxAppear.style.visibility="visible";
    //alert("X: "+ x  + " Y: "+ y);
    //alert("X: "+ (x + 5)+'px'  + " Y: "+ (y + 5) + 'px');
   // boxAppear.style.position = "relative";
    boxAppear.style.left = (x + 5) +'px';
    boxAppear.style.top = (y + 20)+ 'px';
}
function hide(){
    boxAppear.style.visibility="hidden";
}
