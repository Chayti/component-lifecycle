<h2 style="text-align: center; color:green"> React component lifecycle methods</h2>

    1. componentWillMount -  এটা ডম এর মধ্যে কোনও কিছু render হওয়ার আগে server and client উভয় side এই execute হয়। একে component এর জন্মও বলা যেতে পারে। 

    2. componentDidMount - Client-side এ component প্রথমবার render হওয়ার পর এটা execute হয়।

    3. componentWillReceiveProps - পরবর্তী render হওয়ার আগে যেই মুহূর্তে props আপডেট হয়, তখন এটা call করা হয়। 

    4. shouldComponentUpdate - এটা একটা Boolean (true or false) value return করবে। এটা নির্ণয় করবে কোনও  component update হবে কি হবে না।  It is true by default.

    5. componentWillUpdate - প্রথমবার rendering শেষ হবার পর যতবার ই component update এর পূর্বে render করা হয়, তার পূর্বে একে call করা হয়। 

    6. componentDidUpdate - প্রতিবার update করার পর render করা হলে তার পর একে call করা হয়। 

    7. componentWillUnmount - যখন একটা component কে dom থেকে remove করা হয়, তখন এর প্রয়োজন হয়। এটা lifecycle এর সর্বশেষ ধাপ। একে component এর জীবন সমাপ্তি ও বলা যেতে পারে। 

<hr>

<p style="text-align: center; color:green">how useEffect replaces some lifecycle methods?</p>
    
    Step - 1: componentDidMount() — useEffect(…, [])
            ```
            useEffect(() => {
                console.log('useEffect — didMount')
            }, [])
            ```

    Step - 2: componentDidUpdate() — useEffect(…, [someState])
            ```
            useEffect(() => {
                console.log('useEffect — didUpdate')
            }, [count])
            ```

    Step - 3: componentWillUnmount() — useEffect(() => { return () => .. }, [])
            ```
            useEffect(() => {
                return () => console.log('useEffect — willUnmount')
            }, [])
            ```

<hr>

[https://javascript.plainenglish.io/lifecycle-methods-substitute-with-react-hooks-b173073052a]<img src="https://miro.medium.com/max/720/1*bsk4y_rRxmX_Qtol3H3caw.webp" alt="Alt text" title="Optional title">


     
