const JSX = (<div>
    <h1>Hello! This is React.</h1>
    <p>I added HTML in Javasript without any interaction between the two.</p>
    <ul>
        <li>
            I can add any elements I want.
        </li>
        <li>
            I can even change them!
        </li>
    </ul>
    <h2>
        Isn't this cool!
    </h2>
    </div>);

ReactDOM.render(JSX, document.getElementById('react-testing'));