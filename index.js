function App (){

    const [startTime, setStartTime] = React.useState(false);
    const [count, setCount] = React.useState(0);

    let id = React.useRef();
    const [arr, setArr] = React.useState([]);
    const [arr2, setArr2] = React.useState([]);
    const [isChecked, setIsChecked] = React.useState(false);

    function playAudio(url) {
        new Audio(url).play();
      }

    function startTimer(){
        if(startTime== false){ 
            console.log(startTime)
            setStartTime(true)
        }else{
            console.log(startTime)
            setStartTime(false)
        }
    }

    function start(){
        if(startTime && arr.length>0){
            if(equal()){
                let num = arr;
                num.push(Math.floor(Math.random()*4)+1)
                console.log(num)
                setArr(num)
            }else{
                let num = arr;
                setArr(num);
            }
        }else{
            let num = arr;
            num.push(Math.floor(Math.random()*4)+1)
            console.log(num)
            setArr(num)
        }
       
    }

    function equal(){
        if(arr.length=== arr2.length && arr.length>0){
            for(let i = 0; i != arr.length;i++){
                if(arr[i]!== arr2[i]){
                    if(isChecked){
                        //startTimer();
                        setArr2([]);
                        setArr([]);
                        document.getElementById('win').innerHTML="GAME OVER"
                        document.getElementById('your-turn').innerHTML="";
                        return false;
                    }
                    startTimer();
                    setArr2([]);
                    document.getElementById('your-turn').innerHTML="SIMON SAYS";
                    return false;
                }
            }
            if(arr2.length === 20){
                document.getElementById('win').innerHTML="YOU WON"
                document.getElementById('your-turn').innerHTML=""
            

                setArr2([]);
                setArr([]);
                return false;
            }
            return true;
        }
        
    }

    function timeHandler(){
        if(startTime){
            id.current = setInterval(()=>{
                setCount((prevCount) => prevCount+1);
            
            
            
           /* if(arr.length === 1 && count===0){
                start();
            }*/
            
            if(count === arr.length){
                if(count > 0){
                    startTimer();
                    start(); 
                    setCount(0);
                    console.log("vege \n" + count)
                    document.getElementById('your-turn').innerHTML="YOUR TURN";
                }else{
                    start();
                }
               
            }else if(arr.length===0){
                start();
                startTimer();
                simon(arr[count]);
            }
                simon(arr[count]);
                

           /* if(count ===0 && arr.length===0){
                startTimer();  
                //start();
            }*/
            },2000)
        }
    }
    
    React.useEffect(() => {  
        timeHandler();
        return () => clearInterval(id.current);
    }),[];

    function resetFunction(){
        setArr([]);
        setArr2([]);    
    }


    function simon(k){
            if(k===1){
                document.getElementById("blue").classList.add('active-blue');
                playAudio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
                console.log('blue')
                setTimeout(restore,1500)
            }
            if(k===2){
                document.getElementById("green").classList.add('active-green');
                playAudio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
                console.log('green')
                setTimeout(restore,1500)
            }
            if(k===3){
                document.getElementById("red").classList.add('active-red');
                playAudio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
                console.log('red')
                setTimeout(restore,1500)
            }
            if(k===4){
                document.getElementById("yellow").classList.add('active-yellow');
                playAudio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
                console.log('yellow')
                setTimeout(restore,1500)
            }
    }


    function restore(){
        document.getElementById("blue").classList.remove('active-blue');
        document.getElementById("green").classList.remove('active-green');
        document.getElementById("red").classList.remove('active-red');
        document.getElementById("yellow").classList.remove('active-yellow');
            
    }


    const handleClick = event => {
        if(!startTime){
            if(event.currentTarget.classList[0] === "down-right"){
                event.currentTarget.classList.add('active-blue');
                playAudio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
                let num = arr2;
                num.push(1)
                setArr2(num)
                setTimeout(restore,1500);
                console.log(arr2)
                if(equal()){
                    startTimer();
                    start();
                    setArr2([]);
                    document.getElementById('your-turn').innerHTML="SIMON SAYS"; 
                }
            }
            if(event.currentTarget.classList[0] === "down-left"){
                event.currentTarget.classList.add('active-green');
                playAudio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
                let num = arr2;
                num.push(2)
                setArr2(num)
                setTimeout(restore,1500);
                console.log(arr2)
                if(equal()){
                    startTimer();
                    start();
                    setArr2([]);
                    document.getElementById('your-turn').innerHTML="SIMON SAYS";  
                }
            }
            if(event.currentTarget.classList[0] === "up-left"){
                event.currentTarget.classList.add('active-yellow');
                playAudio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
                let num = arr2;
                num.push(4)
                setArr2(num)
                setTimeout(restore,1500);
                console.log(arr2)
                if(equal()){
                    startTimer();
                    start();
                    setArr2([]);
                    document.getElementById('your-turn').innerHTML="SIMON SAYS";  
                }
            }
            if(event.currentTarget.classList[0] === "up-right"){
                event.currentTarget.classList.add('active-red');
                playAudio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
                let num = arr2;
                num.push(3)
                setArr2(num)
                setTimeout(restore,1500);
                console.log(arr2)
                if(equal()){
                    startTimer();
                    start();
                    setArr2([]);
                    document.getElementById('your-turn').innerHTML="SIMON SAYS";  
                }
            }
        }else{
            restore();
        }
    };
    


    return(
        <div className="container">
            <div className="circle">
                <p id="your-turn">Click to Start</p>
                <p id='rounds'>Rounds: {arr.length}</p>
                <h1 id="win"></h1>
                <button onClick={()=>{
                    if(!startTime){
                        setStartTime(true)
                    }
                    //start()
                    //simon(arr[0]);
                    document.getElementById('win').innerHTML=""}}>Start</button>
                <button onClick={()=>{
                    if(!startTime){
                    resetFunction()}
                    }}>Reset</button>
                    <label className="switch">
                        <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}  
                        />
                        <span className="slider round"></span>
                    </label>
            </div>
            <div id="yellow" className="up-left" onClick={handleClick}></div>
            <div id="red"  className="up-right" onClick={handleClick}></div>
            <div id="green"  className="down-left" onClick={handleClick}></div>
            <div id="blue"  className="down-right" onClick={handleClick}></div>
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

root.render(<App/>)