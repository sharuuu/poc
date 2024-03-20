import { Link, routes } from '@redwoodjs/router'

type SpendPoCLayoutProps = {
  children?: React.ReactNode
}

const SpendPoCLayout = ({ children }: SpendPoCLayoutProps) => {
  return (
    <>
      <header>
        <h1>Spend PoC's</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.QRCode()}>QR Code</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default SpendPoCLayout
