import Link from "node_modules/next/link";
import styles from '../../styles/Typescript.module.css'

export default function Typescript(): JSX.Element {
    return (
        <>
            <div className="container text-center">
                <div className="row my-5">
                    <div className="col">
                        <h1>Typescript Practice</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className={'card' + ' ' + styles.card}>
                            <div className="card-body">
                                <h5 className="card-title">홈으로 돌아가기</h5>
                                <Link href="/">
                                    <p className="card-text cur_p">/</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className={'card' + ' ' + styles.card}>
                            <div className="card-body">
                                <h5 className="card-title">Audio Player</h5>
                                <Link href="/typescript/audioplayer">
                                    <p className="card-text cur_p">/typescript/audioplayer</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={'card' + ' ' + styles.card}>
                            <div className="card-body">
                                <h5 className="card-title">Audio Mixer</h5>
                                <Link href="/typescript/audiomixer">
                                    <p className="card-text cur_p">/typescript/audiomixer</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}