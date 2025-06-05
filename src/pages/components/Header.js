import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getTotalCartItem } from '../../helpers/Helper';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { useCart } from '../../context/CartContext';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    // Use the cart context instead of local state
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [cartUpdated, setCartUpdated] = useState(false);

    useEffect(() => {
        console.log('cart number: ', getTotalCartItem());

        const interval = setInterval(() => {
            const updatedCartItems = getTotalCartItem();
            if (updatedCartItems !== totalCartItems) {
                setTotalCartItems(updatedCartItems);
                setCartUpdated(true);
                // Reset update animation after 2 seconds
                setTimeout(() => {
                    setCartUpdated(false);
                }, 2000);
            }
        }, 2000); // Check every 5 seconds
        return () => clearInterval(interval);
    }, [totalCartItems]);

    const handleSearchSubmit = () => {
        // e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            // Check if we're in a browser environment before accessing DOM
            if (typeof window !== 'undefined' && typeof bootstrap !== 'undefined') {
                const modal = document.getElementById('exampleModal1');
                if (modal) {
                    const bootstrapModal = bootstrap.Modal.getInstance(modal);
                    if (bootstrapModal) bootstrapModal.hide();
                }
            }
        }
    };

    return (
        <>
            <header>
                <div className="top-bar border-bottom">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="left">
                                <ul className="d-flex gap-2 align-items-center">
                                    {/* <li><span>Free shipping and returns over ₹499</span></li> */}
                                    <li>
                                        <span className="d-flex align-items-center">
                                            <i className="fa-light fa-phone-volume" />
                                            Call: <Link href="tel:9019391045">+91 9019391045</Link>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="d-flex align-items-center">
                                            <i className="fa-light fa-envelope" />
                                            Email: <Link href="mailto:byrappasilk@gmail.com">byrappasilk@gmail.com</Link>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <select className="form-select form-select-sm border-0 rounded-0" aria-label="Default select example">
                                    <option selected>India ( INR ₹ )</option>
                                    {/* <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option> */}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar end */}
                <nav className="navbar navbar-expand-lg" id="navbar_top">
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            <img src="/assets/images/logo.png" alt="byrappa" width={150} height={50} />
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item dropdown has-megamenu position-relative">
                                    <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">All</Link>
                                    <div className="dropdown-menu megamenu border-0 rounded-0" role="menu">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h4 className="badge rounded-pill">	Crape Collections</h4>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/plain_crape_sarees_1746101926">
                                                            Plain Crape Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/printed_crape_sarees_1746101958">
                                                            Printed Crape Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/party_wear_crape_sarees_1746101976">
                                                            Party Wear Crape Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/wedding_crape_sarees_1746102000">
                                                            Wedding Crape Sarees
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <h4 className="badge rounded-pill">Pure Silk Sarees</h4>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/banarasi_silk_sarees_1746102049">
                                                            Banarasi Silk Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/kanchipuram_silk_sarees_1746102064">
                                                            Kanchipuram Silk Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/mysore_silk_sarees_1746102085">
                                                            Mysore Silk Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/tussar_silk_sarees_1746102108">
                                                            Tussar Silk Sarees
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <h4 className="badge rounded-pill">Satin Sarees</h4>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/crape_satin_sarees_1746102368">
                                                            Crape Satin Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/printed_satin_sarees_1746102423">
                                                            Printed Satin Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/embroidered_satin_sarees_1746102436">
                                                            Embroidered Satin Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/plain_satin_sarees_1746102450">
                                                            Plain Satin Sarees
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <h4 className="badge rounded-pill">	Fancy Collections</h4>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/crape_fancy_sarees_1746102498">
                                                            Crape Fancy Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/printed_fancy_sarees_1746102526">
                                                            Printed Fancy Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/embroidered_fancy_sarees_1746102589">
                                                            Embroidered Fancy Sarees
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" href="/shop/category/plain_fancy_sarees_1746102603">
                                                            Plain Fancy Sarees
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="nav-item dropdown position-relative">
                                    <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Tissue Sarees</Link>
                                    <div className="dropdown-menu  border-0 rounded-0" role="menu">
                                        <ul>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/plain_tissue_sarees_1746102922">
                                                    Plain Tissue Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/embroidered_tissue_sarees_1746102912">
                                                    Embroidered Tissue Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/printed_tissue_sarees_1746102896">
                                                    Printed Tissue Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/crape_tissue_sarees_1746102886">
                                                    Crape Tissue Sarees
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* <li className="nav-item"><Link className="nav-link" href="/shop/category/pashmina_1745398745">Pashmina</Link></li> */}
                                <li className="nav-item dropdown position-relative">
                                    <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pashmina</Link>
                                    <div className="dropdown-menu  border-0 rounded-0" role="menu">
                                        <ul>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/plain_pashmina_sarees_1746102830">
                                                    Plain Pashmina Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/embroidered_pashmina_sarees_1746102813">
                                                    Embroidered Pashmina Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/printed_pashmina_sarees_1746102803">
                                                    Printed Pashmina Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/crape_pashmina_sarees_1746102793">
                                                    Crape Pashmina Sarees
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* <li className="nav-item"><Link className="nav-link" href="/shop/category/semi_silk_sarees_1745402389">Semi Silk Sarees</Link></li> */}
                                <li className="nav-item dropdown position-relative">
                                    <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Semi Silk Sarees</Link>
                                    <div className="dropdown-menu  border-0 rounded-0" role="menu">
                                        <ul>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/plain_semi_silk_sarees_1746102769">
                                                    Plain Semi Silk Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/embroidered_semi_silk_sarees_1746102756">
                                                    Embroidered Semi Silk Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/printed_semi_silk_sarees_1746102745">
                                                    Printed Semi Silk Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/crape_semi_silk_sarees_1746102731">
                                                    Crape Semi Silk Sarees
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* <li className="nav-item"><Link className="nav-link" href="/shop/category/johrivaaj_sarees_1745414873">Johrivaaj Sarees</Link></li> */}
                                <li className="nav-item dropdown position-relative">
                                    <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Johrivaaj Sarees</Link>
                                    <div className="dropdown-menu  border-0 rounded-0" role="menu">
                                        <ul>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/plain_johrivaaj_sarees_1746102657">
                                                    Plain Johrivaaj Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/embroidered_johrivaaj_sarees_1746102643">
                                                    Embroidered Johrivaaj Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/printed_johrivaaj_sarees_1746102632">
                                                    Printed Johrivaaj Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/crape_johrivaaj_sarees_1746102621">
                                                    Crape Johrivaaj Sarees
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* <li className="nav-item"><Link className="nav-link" href="/shop/category/semi_mysore_silk_1745402379">Semi Mysore Silk</Link></li> */}
                                <li className="nav-item dropdown position-relative">
                                    <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Semi Mysore Silk</Link>
                                    <div className="dropdown-menu  border-0 rounded-0" role="menu">
                                        <ul>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/plain_semi_mysore_silk_sarees_1746102713">
                                                    Plain Semi Mysore Silk Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/embroidered_semi_mysore_silk_sarees_1746102700">
                                                    Embroidered Semi Mysore Silk Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/printed_semi_mysore_silk_sarees_1746102689">
                                                    Printed Semi Mysore Silk Sarees
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="/shop/category/crape_semi_mysore_silk_sarees_1746102676">
                                                    Crape Semi Mysore Silk Sarees
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div className="icon-menu">
                            <ul className="d-flex align-items-center gap-4">
                                <li>
                                    <a data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">
                                        <i className="fa-light fa-magnifying-glass" />
                                    </a>
                                </li>
                                <li>
                                    <Link href="/auth/login">
                                        <i className="fa-light fa-user" />
                                    </Link>
                                </li>
                                <li className="position-relative">
                                    <Link href="/checkout">
                                        <i className="fa-light fa-cart-shopping" />
                                        <span className="badge position-absolute translate-middle badge rounded-pill bg-danger">{totalCartItems}</span>
                                    </Link>
                                </li>
                                <li>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="modal search-modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content border-0 rounded-0">
                            <div className="modal-body">
                                <form onSubmit={handleSearchSubmit}>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control rounded-0"
                                            placeholder="Search your product"
                                            aria-describedby="button-addon2"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}