const Footer = () => {
    //"rounded-bottom-4 row align-items-center" /*    height: 6em;*/
    //className="btn btn-danger col-2 offset-4"
    return (
        <footer className={`rounded-b-2xl bg-gray h-[6em] clear-both grid grid-cols-8 items-center`}>
            <div className="bg-danger rounded-[5px] border-black border-2 px-3 py-2 cursor-pointer hover:text-white hover:bg-red-500 col-start-3">
                <p className={`text-center`}>Send me an <span className="text-black uppercase">email</span></p>
                {/*<p className="m-0"*/}
            {/*    <span className="text-dark => text-black text-uppercase => uppercase*/}
            </div>
        </footer>
    );
};

export default Footer;