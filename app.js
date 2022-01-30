const root = document.getElementById("root");

function MinuteToHour(){
    const[time, setTime] = React.useState(0);
    const[flipped, changeFlip] = React.useState(false);
    const onFlip = () => {
        reset();
        changeFlip((current) => !current);
    }
    const onChange = (event) => {
        setTime(event.target.value);
    }

    const reset = () => {
        setTime(0);
    }

    return (
        <div>
            <div>
                <label htmlFor="minute">Minute</label>
                <input type="number" id="minute" value={!flipped ? time : time * 60} disabled={flipped} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="hour">Hour</label>
                <input type="number" id="hour" value={flipped ? time : Math.round(time / 60)} disabled={!flipped} onChange={onChange}/>
            </div>
            <br />
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>Flip</button>
        </div>
    );
}

function KmToMile(){
    const[dist, setDist] = React.useState(0);

    const onChange = (event) => {
        setDist(event.target.value);
    }

    const[flipped, changeFlip] = React.useState(false);

    const onFlip = () => {
        changeFlip((current) => !current);
    }

    const reset = () => {
        setDist(0);
    }

    return (
        <div>
            <div>
                <label htmlFor="km">Km</label>
                <input type="number" id="km" value={!flipped ? dist : dist * 1.609344} disabled={flipped} onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="mile">Mile</label>
                <input type="number" id="mile" value={flipped ? dist : Math.round(dist / 1.609344)} disabled={!flipped} onChange={onChange}/>
            </div>
            <br />
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>Flip</button>
        </div>
    )
}

function App(){
    const[index, changeIndex] = React.useState("0");
    const onSelect = (event) => {
        changeIndex(event.target.value);
    };

    return (
        <div>
            <h3>Basic Converter</h3>
            <select onChange={onSelect}>
                <option value="0">--Select an option--</option>
                <option value="1">Minute to Hour</option>
                <option value="2">Km to Mile</option>
            </select>
            <hr />
            {index === "1" ? <MinuteToHour/> : null}
            {index === "2" ? <KmToMile /> : null}
        </div>
    );
}

ReactDOM.render(<App />, root);