import { useState } from 'react'
import './projectInfo.css'

export default function ProjectInfo() {

    const [infos, setInfos] = useState([
        {
            id: 1,
            class: "row" ,
            name: "WORKSHOP 4 ta",
            lists: [
                {
                    name: "Oflayn uchrashuv",
                },
                {
                    name: "Instrumentlarni real holatda bajarish",
                },
                {
                    name: "Texnikalarni biznesga moslashtirish",
                },
                {
                    name: "Amaliyotda qo‘llash uchun yo‘riqnomalar",
                }
            ],
            image: "https://thumb.tildacdn.com/tild3964-3230-4336-a630-623334383430/-/resize/623x/-/format/webp/features_2.png"
        },
        {
            id: 2,
            class: "rowRevers" ,
            name: "Telegram gruppa",
            lists: [
                {
                    name: "Katta guruh",
                },
                {
                    name: "Kichik guruh",
                },
                {
                    name: "Netvorking",
                },
                {
                    name: "O‘z reklamasi joylash",
                },
                {
                    name: "Voise chat har hafta 1 marta"
                }
            ],
            image: "https://static.tildacdn.com/tild6535-6332-4238-a330-396233393734/ezgif-5-8d228b218eqe.gif"
        }
    ])

    return (
        <div className="prjectInfo">
            <div className="prjectInfoCon">
                <div className="prjectInfoCon_Titls">
                    <span className="prjectInfoCon_Titls_name">Dastur o'z ichiga nimalarni oladi?</span>
                    <p className="prjectInfoCon_Titls_text">
                        Ushbu dastur juda puxta ishlangan bo'lib, siz maksimal natija
                        olishingiz uchun barcha shart-sharoitlar yaratilgan hamda PCG
                        jamoasi tomonidan 100% sifatli xizmat ko'rsatiladi
                    </p>
                </div>
                <div className="prjectInfoCon_Infos">
                    {
                        infos.map(info => (
                            <div className={`prjectInfoCon_Info ${info.class}`}>
                                <div className="prjectInfoCon_Info_texts">
                                    <span>{info.name}</span>
                                    <ul>
                                        {
                                            info.lists.map(item => (
                                                <li>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                    <button>Ko'proq ma'lumot olish</button>
                                </div>
                                <div className="prjectInfoCon_Info_images">
                                    <img src={info.image} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
} 