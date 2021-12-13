const Home = () => {
    const name = "Leon S Kennedy";

    const formula = (
        <h3>
            H<sub>2</sub>0
        </h3>
    );

    const sum = (a, b) => { 
        return a +b;
    };

    const userdetails = {
        name: "Leon S Kennedy",
        email: "leon@mail.com",
        age: 23,
    };
    return(
        <div>
            <h1>Home Component</h1>
             <h2>{name}</h2>
             {formula}
             {sum(34 ,345)}
             <br />
             <h2>Name : {userdetails.name}</h2>
             <h2>Email : {userdetails.email}</h2>
             <h2>Age : {userdetails.age}</h2>
        </div>
    );
};

export default Home;
