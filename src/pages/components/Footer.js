import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className="modal search-modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content border-0 rounded-0">
                    <div className="modal-body">
                        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        <form>
                        <div className="input-group">
                            <input type="text" className="form-control rounded-0" placeholder="Search your product" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="link-wrap">
                                    <h5>Useful links</h5>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about-us">About Us</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                        <li><Link href="/shop">Shop</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="link-wrap">
                                    <h5>Policies</h5>
                                    <ul>
                                        <li><Link href="/policies/privacypolicies">Privacy Policy</Link></li>
                                        <li><Link href="/policies/refundpolicy">Refund Policy</Link></li>
                                        <li><Link href="/policies/shippingpolicies">Shipping policy</Link></li>
                                        <li><Link href="/policies/termsandconditions">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="link-wrap">
                                    <h5>Contact Us</h5>
                                    <ul>
                                        <li className="d-flex align-items-center"><i className="bi bi-envelope" /><a href="mailto:byrappasilks@gmail.com">byrappasilk@gmail.com</a></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-telephone" /><a href="tel:9019391045">9019391045</a></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-chat-right-text" /><a href="#">Chat with Us</a></li>
                                    </ul>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary px-4" type="button" id="button-addon2">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="link-wrap">
                                    <h5>Follow Us On</h5>
                                    <ul>
                                        <li className="d-flex align-items-center"><i className="bi bi-facebook" /><a href="https://www.facebook.com/byrappasilk">Facebook</a></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-instagram" /><a href="https://www.instagram.com/byrappasilks/">Instagram</a></li>
                                        {/* <li className="d-flex align-items-center"><i className="bi bi-youtube" /><a href="#">Youtube</a></li>
                                        <li className="d-flex align-items-center"><i className="bi bi-linkedin" /><a href="#">Linkedin</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer top end */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="payments">
                                <ul className="d-flex">
                                    <li><a href="#">
                                        <svg height="56px" width="56px" style={{ enableBackground: 'new 0 0 512 512' }} version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="形状_1_3_" style={{ enableBackground: 'new' }}><g id="形状_1"><g><path d="M211.328,184.445l-23.465,144.208h37.542l23.468-144.208     H211.328z M156.276,184.445l-35.794,99.185l-4.234-21.358l0.003,0.007l-0.933-4.787c-4.332-9.336-14.365-27.08-33.31-42.223     c-5.601-4.476-11.247-8.296-16.705-11.559l32.531,124.943h39.116l59.733-144.208H156.276z M302.797,224.48     c0-16.304,36.563-14.209,52.629-5.356l5.357-30.972c0,0-16.534-6.288-33.768-6.288c-18.632,0-62.875,8.148-62.875,47.739     c0,37.26,51.928,37.723,51.928,57.285c0,19.562-46.574,16.066-61.944,3.726l-5.586,32.373c0,0,16.763,8.148,42.382,8.148     c25.616,0,64.272-13.271,64.272-49.37C355.192,244.272,302.797,240.78,302.797,224.48z M455.997,184.445h-30.185     c-13.938,0-17.332,10.747-17.332,10.747l-55.988,133.461h39.131l7.828-21.419h47.728l4.403,21.419h34.472L455.997,184.445z      M410.27,277.641l19.728-53.966l11.098,53.966H410.27z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#005BAC' }} /></g></g></g><g id="形状_1_2_" style={{ enableBackground: 'new' }}><g id="形状_1_1_"><g><path d="M104.132,198.022c0,0-1.554-13.015-18.144-13.015H25.715     l-0.706,2.446c0,0,28.972,5.906,56.767,28.033c26.562,21.148,35.227,47.51,35.227,47.51L104.132,198.022z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#F6AC1D' }} /></g></g></g></svg>
                                    </a></li>
                                    <li><a href="#">
                                        <svg enableBackground="new 0 0 64 64" height="56px" id="Layer_1" version="1.1" viewBox="0 0 64 64" width="56px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><g><g><path d="M63.5,32c0,10.4-8.4,18.9-18.9,18.9c-10.4,0-18.9-8.5-18.9-18.9v0c0-10.4,8.4-18.9,18.8-18.9     C55.1,13.1,63.5,21.6,63.5,32C63.5,32,63.5,32,63.5,32z" fill="#FFB600" /></g></g><g><g><path d="M44.6,13.1c10.4,0,18.9,8.5,18.9,18.9c0,0,0,0,0,0c0,10.4-8.4,18.9-18.9,18.9c-10.4,0-18.9-8.5-18.9-18.9     " fill="#F7981D" /></g></g><g><g><path d="M44.6,13.1c10.4,0,18.9,8.5,18.9,18.9c0,0,0,0,0,0c0,10.4-8.4,18.9-18.9,18.9" fill="#FF8500" /></g></g><g><g><path d="M19.2,13.1C8.9,13.2,0.5,21.6,0.5,32c0,10.4,8.4,18.9,18.9,18.9c4.9,0,9.3-1.9,12.7-4.9l0,0h0     c0.7-0.6,1.3-1.3,1.9-2h-3.9c-0.5-0.6-1-1.3-1.4-1.9h6.7c0.4-0.6,0.8-1.3,1.1-2h-8.9c-0.3-0.6-0.6-1.3-0.8-2h10.4     c0.6-1.9,1-3.9,1-6c0-1.4-0.2-2.7-0.4-4H26.2c0.1-0.7,0.3-1.3,0.5-2h10.4c-0.2-0.7-0.5-1.4-0.8-2h-8.8c0.3-0.7,0.7-1.3,1.1-2h6.7     c-0.4-0.7-0.9-1.4-1.5-2h-3.7c0.6-0.7,1.2-1.3,1.9-1.9c-3.3-3.1-7.8-4.9-12.7-4.9C19.3,13.1,19.3,13.1,19.2,13.1z" fill="#FF5050" /></g></g><g><g><path d="M0.5,32c0,10.4,8.4,18.9,18.9,18.9c4.9,0,9.3-1.9,12.7-4.9l0,0h0c0.7-0.6,1.3-1.3,1.9-2h-3.9     c-0.5-0.6-1-1.3-1.4-1.9h6.7c0.4-0.6,0.8-1.3,1.1-2h-8.9c-0.3-0.6-0.6-1.3-0.8-2h10.4c0.6-1.9,1-3.9,1-6c0-1.4-0.2-2.7-0.4-4     H26.2c0.1-0.7,0.3-1.3,0.5-2h10.4c-0.2-0.7-0.5-1.4-0.8-2h-8.8c0.3-0.7,0.7-1.3,1.1-2h6.7c-0.4-0.7-0.9-1.4-1.5-2h-3.7     c0.6-0.7,1.2-1.3,1.9-1.9c-3.3-3.1-7.8-4.9-12.7-4.9c0,0-0.1,0-0.1,0" fill="#E52836" /></g></g><g><g><path d="M19.4,50.9c4.9,0,9.3-1.9,12.7-4.9l0,0h0c0.7-0.6,1.3-1.3,1.9-2h-3.9c-0.5-0.6-1-1.3-1.4-1.9h6.7     c0.4-0.6,0.8-1.3,1.1-2h-8.9c-0.3-0.6-0.6-1.3-0.8-2h10.4c0.6-1.9,1-3.9,1-6c0-1.4-0.2-2.7-0.4-4H26.2c0.1-0.7,0.3-1.3,0.5-2     h10.4c-0.2-0.7-0.5-1.4-0.8-2h-8.8c0.3-0.7,0.7-1.3,1.1-2h6.7c-0.4-0.7-0.9-1.4-1.5-2h-3.7c0.6-0.7,1.2-1.3,1.9-1.9     c-3.3-3.1-7.8-4.9-12.7-4.9c0,0-0.1,0-0.1,0" fill="#CB2026" /></g></g><g><g><g><path d="M26.1,36.8l0.3-1.7c-0.1,0-0.3,0.1-0.5,0.1c-0.7,0-0.8-0.4-0.7-0.6l0.6-3.5h1.1l0.3-1.9h-1l0.2-1.2h-2      c0,0-1.2,6.6-1.2,7.4c0,1.2,0.7,1.7,1.6,1.7C25.4,37.1,25.9,36.9,26.1,36.8z" fill="#FFFFFF" /></g></g><g><g><path d="M26.8,33.6c0,2.8,1.9,3.5,3.5,3.5c1.5,0,2.1-0.3,2.1-0.3l0.4-1.9c0,0-1.1,0.5-2.1,0.5      c-2.2,0-1.8-1.6-1.8-1.6h4.1c0,0,0.3-1.3,0.3-1.8c0-1.3-0.7-2.9-2.9-2.9C28.3,28.9,26.8,31.1,26.8,33.6z M30.3,30.7      c1.1,0,0.9,1.3,0.9,1.4H29C29,32,29.2,30.7,30.3,30.7z" fill="#FFFFFF" /></g></g><g><g><path d="M43,36.8l0.4-2.2c0,0-1,0.5-1.7,0.5c-1.4,0-2-1.1-2-2.3c0-2.4,1.2-3.7,2.6-3.7c1,0,1.8,0.6,1.8,0.6      l0.3-2.1c0,0-1.2-0.5-2.3-0.5c-2.3,0-4.6,2-4.6,5.8c0,2.5,1.2,4.2,3.6,4.2C41.9,37.1,43,36.8,43,36.8z" fill="#FFFFFF" /></g></g><g><g><path d="M15.1,28.9c-1.4,0-2.4,0.4-2.4,0.4l-0.3,1.7c0,0,0.9-0.4,2.2-0.4c0.7,0,1.3,0.1,1.3,0.7      c0,0.4-0.1,0.5-0.1,0.5s-0.6,0-0.9,0c-1.7,0-3.6,0.7-3.6,3c0,1.8,1.2,2.2,1.9,2.2c1.4,0,2-0.9,2.1-0.9l-0.1,0.8h1.8l0.8-5.5      C17.8,29,15.8,28.9,15.1,28.9z M15.5,33.4c0,0.3-0.2,1.9-1.4,1.9c-0.6,0-0.8-0.5-0.8-0.8c0-0.5,0.3-1.2,1.8-1.2      C15.4,33.4,15.5,33.4,15.5,33.4z" fill="#FFFFFF" /></g></g><g><g><path d="M19.7,37c0.5,0,3,0.1,3-2.6c0-2.5-2.4-2-2.4-3c0-0.5,0.4-0.7,1.1-0.7c0.3,0,1.4,0.1,1.4,0.1l0.3-1.8      c0,0-0.7-0.2-1.9-0.2c-1.5,0-3,0.6-3,2.6c0,2.3,2.5,2.1,2.5,3c0,0.6-0.7,0.7-1.2,0.7c-0.9,0-1.8-0.3-1.8-0.3l-0.3,1.8      C17.5,36.8,18,37,19.7,37z" fill="#FFFFFF" /></g></g><g><g><path d="M59.6,27.3L59.2,30c0,0-0.8-1-1.9-1c-1.8,0-3.4,2.2-3.4,4.8c0,1.6,0.8,3.3,2.5,3.3      c1.2,0,1.9-0.8,1.9-0.8l-0.1,0.7h2l1.5-9.6L59.6,27.3z M58.7,32.6c0,1.1-0.5,2.5-1.6,2.5c-0.7,0-1.1-0.6-1.1-1.6      c0-1.6,0.7-2.6,1.6-2.6C58.3,30.9,58.7,31.4,58.7,32.6z" fill="#FFFFFF" /></g></g><g><g><path d="M4.2,36.9l1.2-7.2l0.2,7.2H7l2.6-7.2l-1.1,7.2h2.1l1.6-9.6H8.9l-2,5.9l-0.1-5.9H3.9l-1.6,9.6H4.2z" fill="#FFFFFF" /></g></g><g><g><path d="M35.2,36.9c0.6-3.3,0.7-6,2.1-5.5c0.2-1.3,0.5-1.8,0.7-2.3c0,0-0.1,0-0.4,0c-0.9,0-1.6,1.2-1.6,1.2      l0.2-1.1h-1.9l-1.3,7.8H35.2z" fill="#FFFFFF" /></g></g><g><g><path d="M47.6,28.9c-1.4,0-2.4,0.4-2.4,0.4l-0.3,1.7c0,0,0.9-0.4,2.2-0.4c0.7,0,1.3,0.1,1.3,0.7      c0,0.4-0.1,0.5-0.1,0.5s-0.6,0-0.9,0c-1.7,0-3.6,0.7-3.6,3c0,1.8,1.2,2.2,1.9,2.2c1.4,0,2-0.9,2.1-0.9l-0.1,0.8h1.8l0.8-5.5      C50.4,29,48.3,28.9,47.6,28.9z M48.1,33.4c0,0.3-0.2,1.9-1.4,1.9c-0.6,0-0.8-0.5-0.8-0.8c0-0.5,0.3-1.2,1.8-1.2      C48,33.4,48,33.4,48.1,33.4z" fill="#FFFFFF" /></g></g><g><g><path d="M52,36.9c0.6-3.3,0.7-6,2.1-5.5c0.2-1.3,0.5-1.8,0.7-2.3c0,0-0.1,0-0.4,0c-0.9,0-1.6,1.2-1.6,1.2      l0.2-1.1h-1.9l-1.3,7.8H52z" fill="#FFFFFF" /></g></g></g><g><g><g><path d="M23,35.4c0,1.2,0.7,1.7,1.6,1.7c0.7,0,1.3-0.2,1.5-0.3l0.3-1.7c-0.1,0-0.3,0.1-0.5,0.1      c-0.7,0-0.8-0.4-0.7-0.6l0.6-3.5h1.1l0.3-1.9h-1l0.2-1.2" fill="#DCE5E5" /></g></g><g><g><path d="M27.8,33.6c0,2.8,0.9,3.5,2.5,3.5c1.5,0,2.1-0.3,2.1-0.3l0.4-1.9c0,0-1.1,0.5-2.1,0.5      c-2.2,0-1.8-1.6-1.8-1.6h4.1c0,0,0.3-1.3,0.3-1.8c0-1.3-0.7-2.9-2.9-2.9C28.3,28.9,27.8,31.1,27.8,33.6z M30.3,30.7      c1.1,0,1.3,1.3,1.3,1.4H29C29,32,29.2,30.7,30.3,30.7z" fill="#DCE5E5" /></g></g><g><g><path d="M43,36.8l0.4-2.2c0,0-1,0.5-1.7,0.5c-1.4,0-2-1.1-2-2.3c0-2.4,1.2-3.7,2.6-3.7c1,0,1.8,0.6,1.8,0.6      l0.3-2.1c0,0-1.2-0.5-2.3-0.5c-2.3,0-3.6,2-3.6,5.8c0,2.5,0.2,4.2,2.6,4.2C41.9,37.1,43,36.8,43,36.8z" fill="#DCE5E5" /></g></g><g><g><path d="M12.4,31.1c0,0,0.9-0.4,2.2-0.4c0.7,0,1.3,0.1,1.3,0.7c0,0.4-0.1,0.5-0.1,0.5s-0.6,0-0.9,0      c-1.7,0-3.6,0.7-3.6,3c0,1.8,1.2,2.2,1.9,2.2c1.4,0,2-0.9,2.1-0.9l-0.1,0.8h1.8l0.8-5.5c0-2.3-2-2.4-2.8-2.4 M16.5,33.4      c0,0.3-1.2,1.9-2.4,1.9c-0.6,0-0.8-0.5-0.8-0.8c0-0.5,0.3-1.2,1.8-1.2C15.4,33.4,16.5,33.4,16.5,33.4z" fill="#DCE5E5" /></g></g><g><g><path d="M17.5,36.8c0,0,0.6,0.2,2.3,0.2c0.5,0,3,0.1,3-2.6c0-2.5-2.4-2-2.4-3c0-0.5,0.4-0.7,1.1-0.7      c0.3,0,1.4,0.1,1.4,0.1l0.3-1.8c0,0-0.7-0.2-1.9-0.2c-1.5,0-2,0.6-2,2.6c0,2.3,1.5,2.1,1.5,3c0,0.6-0.7,0.7-1.2,0.7" fill="#DCE5E5" /></g></g><g><g><path d="M59.2,30c0,0-0.8-1-1.9-1c-1.8,0-2.4,2.2-2.4,4.8c0,1.6-0.2,3.3,1.5,3.3c1.2,0,1.9-0.8,1.9-0.8l-0.1,0.7      h2l1.5-9.6 M59.1,32.6c0,1.1-0.9,2.5-2,2.5c-0.7,0-1.1-0.6-1.1-1.6c0-1.6,0.7-2.6,1.6-2.6C58.3,30.9,59.1,31.4,59.1,32.6z" fill="#DCE5E5" /></g></g><g><g><path d="M4.2,36.9l1.2-7.2l0.2,7.2H7l2.6-7.2l-1.1,7.2h2.1l1.6-9.6H9.7l-2.8,5.9l-0.1-5.9H5.7l-3.4,9.6H4.2z" fill="#DCE5E5" /></g></g><g><g><path d="M33.1,36.9h2.1c0.6-3.3,0.7-6,2.1-5.5c0.2-1.3,0.5-1.8,0.7-2.3c0,0-0.1,0-0.4,0c-0.9,0-1.6,1.2-1.6,1.2      l0.2-1.1" fill="#DCE5E5" /></g></g><g><g><path d="M44.9,31.1c0,0,0.9-0.4,2.2-0.4c0.7,0,1.3,0.1,1.3,0.7c0,0.4-0.1,0.5-0.1,0.5s-0.6,0-0.9,0      c-1.7,0-3.6,0.7-3.6,3c0,1.8,1.2,2.2,1.9,2.2c1.4,0,2-0.9,2.1-0.9l-0.1,0.8h1.8l0.8-5.5c0-2.3-2-2.4-2.8-2.4 M49,33.4      c0,0.3-1.2,1.9-2.4,1.9c-0.6,0-0.8-0.5-0.8-0.8c0-0.5,0.3-1.2,1.8-1.2C48,33.4,49,33.4,49,33.4z" fill="#DCE5E5" /></g></g><g><g><path d="M49.9,36.9H52c0.6-3.3,0.7-6,2.1-5.5c0.2-1.3,0.5-1.8,0.7-2.3c0,0-0.1,0-0.4,0c-0.9,0-1.6,1.2-1.6,1.2      l0.2-1.1" fill="#DCE5E5" /></g></g></g></g></svg>
                                    </a></li>
                                    <li><a href="#">
                                        <svg enableBackground="new 0 0 64 64" height="64px" id="Layer_1" version="1.1" viewBox="0 0 64 64" width="64px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><g><g><g><g><g><path clipRule="evenodd" d="M49.6,27c-1.5,0-2.7,0.4-3.7,0.6l-0.3,2.3        c0.5-0.2,1.9-0.6,3.1-0.7c1.2,0,1.9,0.2,1.7,1.3c-3.6,0-6,0.7-6.5,3.1c-0.7,4,3.7,4.1,5.4,2.3L49.1,37h3.2l1.4-6.5        C54.2,27.8,51.8,26.9,49.6,27z M49.8,33.7c-0.2,0.8-0.9,1.1-1.7,1.2c-0.7,0-1.3-0.4-0.9-1.2c0.4-0.6,1.3-0.6,2-0.6        c0.2,0,0.5,0,0.8,0C49.9,33,49.8,33.4,49.8,33.7z" fill="#32A6CE" fillRule="evenodd" /></g></g><g><g><path clipRule="evenodd" d="M45.6,29.9c0.5-0.2,1.9-0.6,3.1-0.7c1.2,0,1.9,0.2,1.7,1.3        c-3.6,0-6,0.7-6.5,3.1c-0.7,4,3.7,4.1,5.4,2.3L49.1,37h3.2l1.4-6.5c0.6-2.7-1.9-3.4-4.1-3.4 M49.8,33.7        c-0.2,0.8-0.9,1.1-1.7,1.2c-0.7,0-1.3-0.4-0.9-1.2c0.4-0.6,1.3-0.6,2-0.6c0.2,0,0.5,0,0.8,0C49.9,33,49.8,33.4,49.8,33.7z" fill="#1A80AD" fillRule="evenodd" /></g></g><g><g><polygon clipRule="evenodd" fill="#32A6CE" fillRule="evenodd" points="56.4,24 53.8,37 57,37 59.7,24 56.4,24 56.4,24               " /></g></g><g><g><polygon clipRule="evenodd" fill="#1A80AD" fillRule="evenodd" points="58.7,24 53.8,37 57,37 59.7,24 56.4,24 56.4,24               " /></g></g><g><g><path clipRule="evenodd" d="M41.5,24h-5.9l-2.6,13h3.5l0.9-4h2.5c2.4,0,4.4-1.4,4.9-3.9        C45.3,26.2,43.2,24,41.5,24z M41.4,28.5c-0.2,0.9-1.1,1.5-2,1.5h-1.6l0.7-3h1.7C41.1,27,41.6,27.6,41.4,28.5z" fill="#32A6CE" fillRule="evenodd" /></g></g><g><g><path clipRule="evenodd" d="M41.5,24h-4l-4.6,13h3.5l0.9-4h2.5c2.4,0,4.4-1.4,4.9-3.9        C45.3,26.2,43.2,24,41.5,24z M41.4,28.5c-0.2,0.9-1.1,1.5-2,1.5h-1.6l0.7-3h1.7C41.1,27,41.6,27.6,41.4,28.5z" fill="#1A80AD" fillRule="evenodd" /></g></g></g><g><g><g><path clipRule="evenodd" d="M18.4,27c-1.5,0-2.7,0.4-3.6,0.6l-0.3,2.3        c0.4-0.2,1.9-0.6,3.1-0.7c1.2,0,1.9,0.2,1.7,1.3c-3.5,0-5.9,0.7-6.4,3.1c-0.7,4,3.6,4.1,5.3,2.3L18,37h3.2l1.4-6.5        C23.1,27.8,20.6,26.9,18.4,27z M18.7,33.7c-0.2,0.8-0.9,1.1-1.7,1.2c-0.7,0-1.3-0.4-0.8-1.2c0.4-0.6,1.3-0.6,1.9-0.6        c0.3,0,0.5,0,0.8,0C18.8,33,18.7,33.4,18.7,33.7z" fill="#21789E" fillRule="evenodd" /></g></g><g><g><path clipRule="evenodd" d="M14.6,29.9c0.4-0.2,1.9-0.6,3.1-0.7c1.2,0,1.9,0.2,1.7,1.3        c-3.5,0-5.9,0.7-6.4,3.1c-0.7,4,3.6,4.1,5.3,2.3L18,37h3.2l1.4-6.5c0.6-2.7-1.9-3.4-4.1-3.4 M18.7,33.7        c-0.2,0.8-0.9,1.1-1.7,1.2c-0.7,0-1.3-0.4-0.8-1.2c0.4-0.6,1.3-0.6,1.9-0.6c0.3,0,0.5,0,0.8,0C18.8,33,18.7,33.4,18.7,33.7z" fill="#1A5B80" fillRule="evenodd" /></g></g><g><g><polygon clipRule="evenodd" fill="#21789E" fillRule="evenodd" points="23.9,27 27.1,27 27.6,32.6 30.8,27 34.1,27 26.5,41         22.9,41 25.2,36.8 23.9,27 23.9,27       " /></g></g><g><g><path clipRule="evenodd" d="M23.9,27.2" fill="#1A5B80" fillRule="evenodd" /></g><g><polyline clipRule="evenodd" fill="#1A5B80" fillRule="evenodd" points="27.1,27.2 27.6,32.7 30.8,27 34.1,27 26.5,41         22.9,41 25.2,36.9       " /></g></g><g><g><path clipRule="evenodd" d="M10.5,24h-6L1.9,37h3.5l0.9-4h2.5c2.4,0,4.4-1.4,4.9-3.9        C14.3,26.2,12.2,24,10.5,24z M10.4,28.5c-0.2,0.9-1.1,1.5-2,1.5H6.8l0.7-3h1.7C10.1,27,10.6,27.6,10.4,28.5z" fill="#21789E" fillRule="evenodd" /></g></g><g><g><path clipRule="evenodd" d="M10.5,24H7.8L1.9,37h3.5l0.9-4h2.5c2.4,0,4.4-1.4,4.9-3.9        C14.3,26.2,12.2,24,10.5,24z M10.4,28.5c-0.2,0.9-1.1,1.5-2,1.5H6.8l0.7-3h1.7C10.1,27,10.6,27.6,10.4,28.5z" fill="#1A5B80" fillRule="evenodd" /></g></g></g></g><g><g><path clipRule="evenodd" d="M17.8,30.5c-2.7,0.2-4.5,1-4.9,3c-0.7,4,3.6,4.1,5.3,2.3L18,37      h3.2l0.5-2.4L17.8,30.5z M18.7,33.7c-0.2,0.8-0.9,1.1-1.7,1.2c-0.7,0-1.3-0.4-0.8-1.2c0.4-0.6,1.3-0.6,1.9-0.6      c0.3,0,0.5,0,0.8,0C18.8,33,18.7,33.4,18.7,33.7z" fill="#06435E" fillRule="evenodd" /></g></g><g><polygon clipRule="evenodd" fill="#06435E" fillRule="evenodd" points="27.8,32.5 27.6,32.8 29.7,34.8 34.1,27 30.8,27    " /></g><g><polygon clipRule="evenodd" fill="#06435E" fillRule="evenodd" points="5.4,37 6.3,33 2.2,37    " /></g><g><polygon clipRule="evenodd" fill="#2273AA" fillRule="evenodd" points="36.4,37 37.3,32.8 37.3,32.9 33.2,37    " /></g><g><g><path clipRule="evenodd" d="M48.9,30.5c-2.7,0.2-4.5,1-4.9,3c-0.7,4,3.7,4.1,5.4,2.3      L49.1,37h3.2l0.5-2.4L48.9,30.5z M49.8,33.7c-0.2,0.8-0.9,1.1-1.7,1.2c-0.7,0-1.3-0.4-0.9-1.2c0.4-0.6,1.3-0.6,2-0.6      c0.2,0,0.5,0,0.8,0C49.9,33,49.8,33.4,49.8,33.7z" fill="#2273AA" fillRule="evenodd" /></g></g><g><polygon clipRule="evenodd" fill="#2273AA" fillRule="evenodd" points="56.1,31.1 53.8,37 57,37 57.9,33    " /></g></g><g><g><g><path d="M60.4,26.1v-1.4h-0.5v-0.2h1.3v0.2h-0.5v1.4H60.4z" fill="#32A6CE" /></g></g><g><g><path d="M61.4,26.1v-1.6h0.3l0.4,1.1c0,0.1,0.1,0.2,0.1,0.2c0-0.1,0-0.1,0.1-0.3l0.4-1.1h0.3v1.6h-0.2v-1.4      l-0.5,1.4H62l-0.5-1.4v1.4H61.4z" fill="#32A6CE" /></g></g></g></g></svg>
                                    </a></li>
                                </ul>
                            </div>
                            <div className="copyright">© 2025 Byrappa. All Rights Reserved</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}