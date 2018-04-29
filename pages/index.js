import Link from 'next/link'

const Index = () => (
    <div>
        <p>Welcome to Tapp</p>
        <Link href="/about">
          <button>About us</button>
        </Link>
    </div>
)

export default Index