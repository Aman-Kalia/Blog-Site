import TextHeader from '../textheader/TextHeader';
import './header.css'

export default function Header() {
  return (
        <div className='header'>
          <div className='text-box'>
            <br/>
            <h1>Welcome</h1>
            <p>Blogging is not a rocket science.</p>
            <br/>
            <p>It's about being yourself and putting what you have into it.</p>
            <TextHeader/>
            <div class="mouse_scroll">

		<div class="mouse">
			<div class="wheel"></div>
		</div>
		<div>
			<span class="m_scroll_arrows unu"></span>
			<span class="m_scroll_arrows doi"></span>
			<span class="m_scroll_arrows trei"></span>
		</div>
</div>
          </div>
          
            
        </div>
  );
}
