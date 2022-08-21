import Link from "node_modules/next/link";


export default function tsRender(): JSX.Element {
    return (
        <>
            <h1>Typescript Practice Page!</h1>
            <h2>
                <Link href="/">
                    <a>홈으로 돌아가기</a>
                </Link>
            </h2>
        </>
    )
}