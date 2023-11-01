export default function Condition(props) {
    function UserGreetings(props) {
        return (
            <h1>Welcome back!</h1>
        );
    };

    function GuestGreetings(props) {
        return (
            <h1>Please sing up!!</h1>
        );
    };

    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreetings />
    }
    return <GuestGreetings />

}