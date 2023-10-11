import { Outlet, Link } from "react-router-dom";

const layout = () => {
    return <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                 <Link class="nav-link navbar-brand" to="/">Pokemon</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                       
                        <li class="nav-item">
                           <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                           <Link class="nav-link" to="/tipos">Tipos</Link>
                        </li>
                        

                    </ul>

                </div>
            </div>
        </nav>
       <hr/>
        <Outlet />
    </div>

}
export default layout;