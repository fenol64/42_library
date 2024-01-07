import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

function Header() {

    const [user, setUser] = useState(null);
    const router = useRouter();
    useEffect(() => {
        const userStorage = localStorage.getItem('user');
        if (userStorage) {
            setUser(JSON.parse(userStorage));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('user');
        router.push('/');
    }
  return <>
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Olá, {user?.login}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Livros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Jogos</a>
        </li>
      </ul>
      <div className="d-flex justify-content-end">
            <div className="d-flex">
                <div className="dropdown">
                    <img src={user?.image?.link} alt={user?.name} className="rounded-circle dropdown-toggle" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false" width="40" height="40" />
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                        <li><a className="dropdown-item text-danger" onClick={logout}>Sair</a></li>
                    </ul>
                </div>
            </div>
      </div>
    </div>
  </div>
</nav>
  </>;
}

export default Header;