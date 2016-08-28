// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


ReactDOM.render(
    <div>
        <HelloWorld description="Das ist meine Tolle Hello World Beschreibung" name="Hallo Welt zu => SquadWuschel" alter={12} />
        <HelloWorld description="Eine andere Tolle Beschreibung" name="Hallo Welt zu => Jemand Anderes" />
        <CounterComponent startValue={10} />
    </div>,
    document.getElementById("hellowWorld"))