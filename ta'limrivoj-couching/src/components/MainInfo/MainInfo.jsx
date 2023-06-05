import './minfo.css'



function MainInfo() {
    return (
        <div className='MainInfo'>
            <div className="maininfos">
                <h2 className='Number-inf'>5 259</h2>
                <span className="text-info">
                    Biznes kouchinda qatnashganlar
                </span>
            </div>
            <div className="maininfos">
                <h2 className='Number-inf'> 100 000+</h2>
                <span className="text-info">
                    Trening va onlayn vebinarlarimizda <br />
                    qatnashganlar soni
                </span>
            </div>
            <div className="maininfos">
                <h2 className='Number-inf'>$7 660 000</h2>
                <span className="text-info">
                    Oxirgi ikki yildagi Kouching <br />
                    sof foydasi o'sishi miqdori
                </span>
            </div>
        </div>
    )
}

export default MainInfo