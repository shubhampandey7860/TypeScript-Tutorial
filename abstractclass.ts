abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
    abstract getSepia():void

    getReelTime():number{
        return 8
    }
}

// const hc = new TakePhoto("test","Test")   
// It will throw error because we can not create instance of abstract class



class Instagram extends TakePhoto{

    constructor( 
        public cameraMode:string,
        public filter:string,
        public burst:number
        ){super(cameraMode,filter)}

        getSepia(): void {
            console.log("sepia")
        }
    
}


const hc = new Instagram("test","Test",3)
hc.getSepia()

