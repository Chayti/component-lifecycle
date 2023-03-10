<h2> React component lifecycle methods</h2>

    1. componentWillMount -  এটা ডম এর মধ্যে কোনও কিছু render হওয়ার আগে server and client উভয় side এই execute হয়। একে component এর জন্মও বলা যেতে পারে। 

    2. componentDidMount - Client-side এ component প্রথমবার render হওয়ার পর এটা execute হয়।

    3. componentWillReceiveProps - পরবর্তী render হওয়ার আগে যেই মুহূর্তে props আপডেট হয়, তখন এটা call করা হয়। 

    4. shouldComponentUpdate - এটা একটা Boolean (true or false) value return করবে। এটা নির্ণয় করবে কোনও  component update হবে কি হবে না।  It is true by default.

    5. componentWillUpdate - প্রথমবার rendering শেষ হবার পর যতবার ই component update এর পূর্বে render করা হয়, তার পূর্বে একে call করা হয়। 

    6. componentDidUpdate - প্রতিবার update করার পর render করা হলে তার পর একে call করা হয়। 

    7. componentWillUnmount - যখন একটা component কে dom থেকে remove করা হয়, তখন এর প্রয়োজন হয়। এটা lifecycle এর সর্বশেষ ধাপ। একে component এর জীবন সমাপ্তি ও বলা যেতে পারে। 

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*yRAD50wbZEsTe6U4XNrMFA.png" alt="Alt text">

<hr>

<h2><mark>React LifeCycle Methods Diagram</mark></h2>

**[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)**
<br>
_click different parts on the image to read from documentation_

<hr>

<h2>how useEffect replaces some lifecycle methods?</h2>

[Reference](https://louispetrik.medium.com/react-hooks-lifecycle-b7e7cc50ffc)
    
    Step - 1: componentDidMount() — useEffect(…, [])
            useEffect(() => {
                console.log('useEffect — didMount')
            }, [])

    Step - 2: componentDidUpdate() — useEffect(…, [someState])
            useEffect(() => {
                console.log('useEffect — didUpdate')
            }, [count])

    Step - 3: componentWillUnmount() — useEffect(() => { return () => .. }, [])
            useEffect(() => {
                return () => console.log('useEffect — willUnmount')
            }, [])

<hr>

[Hooks replacement of lifeCycle methods](https://javascript.plainenglish.io/lifecycle-methods-substitute-with-react-hooks-b173073052a)<img src="https://miro.medium.com/max/720/1*bsk4y_rRxmX_Qtol3H3caw.webp" alt="Alt text" title="Optional title">

<hr>

<h2>Some important links for further read:</h2>

1. [https://medium.com/@ralph1786/intro-to-react-component-lifecycle-ac52bf6340c](https://medium.com/@ralph1786/intro-to-react-component-lifecycle-ac52bf6340c)
    
2. [https://stackoverflow.com/questions/53254017/react-hooks-and-component-lifecycle-equivalent](https://stackoverflow.com/questions/53254017/react-hooks-and-component-lifecycle-equivalent)

3. [https://www.javatpoint.com/react-component-life-cycle](https://www.javatpoint.com/react-component-life-cycle)

4. [https://www.code-sample.com/2019/11/react-lifecycle-components-mounting.html](https://www.code-sample.com/2019/11/react-lifecycle-components-mounting.html)

5. **Little bit advanced** [https://medium.com/geekculture/lifecycle-of-react-component-cc5a3033635d](https://medium.com/geekculture/lifecycle-of-react-component-cc5a3033635d)

6. **Little bit advanced** [https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d](https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d)




     
