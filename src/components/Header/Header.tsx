import cl from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.container}>
        {/* <a className={`${cl.link} ${cl.active}`} href="/">ToDo</a> */}
        <a className={cl.link} href="/">ToDo</a>
      </div>
    </header>

  );
    // <header className="header">
    //   <div className="header-container">
    //     <a href="/">ToDo</a>
    //   </div>
    // </header>
}
