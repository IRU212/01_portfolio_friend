

function Home(props: { backURL: string }) {

    // バックエンド 元URL
    const url = props.backURL;

    console.log(url)

    return (
        <div>
            Home
        </div>
    )
}

export default Home