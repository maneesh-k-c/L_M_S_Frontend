import React from 'react'
import "./Footer.css";
import { MDBIcon} from 'mdb-react-ui-kit';


export default function Footer() {
  return (
    <div className='footer-main'>
    <div className='footer-sec'>
        <div className='footer-thr'>
            <div className='footer-items'>
                <h5>Connect</h5>
                <a href=''>About</a>
                <a href=''>Blog</a>
                <a href=''>In the News</a>
                <a href=''>Partners</a>
                <a href=''>Become an Instructor</a>
            </div>
            <div className='footer-items'>
                <h5>Resourses</h5>
                <a href=''>Catalog</a>
                <a href=''>Student Success</a>
                <a href=''>Scholarships</a>
            </div>
            <div className='footer-items'>
                <h5>Legal</h5>
                <a href=''>Terms of Service</a>
                <a href=''>Privacy Policy</a>
                <a href=''>Accessibility Policy</a>
                <a href=''>Trademark Policy</a>
                <a href=''>Sitemap</a>
            </div>
            <div className='footer-items'>
                <h5>More</h5>
                <a href=''>Help and FAQ</a>
                <a href=''>Contact Us</a>
                <a href=''>Careers</a>
                <a href=''>Why Learneraxis</a>
                <a href=''>Download App</a>
            </div>
            <div className='footer-apple-google'>
                <div className='footer-language'>
                    <div><MDBIcon icon="language" /></div>
                    <div className='footer-lang-type'>English</div>
                </div>
                <div><img src="/apple.jpg" alt="" /></div>
                <div><img src="/google.jpg" alt="" /></div>
            </div>
        </div>
        <div className='footer-two'>
            <div className='footer-two-sec'>
                <div>© 2022 Betasymbol. All rights reserved.</div>
                <div className='footer-two-icons'>
                    <div><MDBIcon   fab icon="facebook-f" /></div>
                    <div><MDBIcon fab icon="twitter" /></div>
                    <div><MDBIcon fab icon="instagram" /></div>
                    <div><MDBIcon fab icon="youtube" /></div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}
