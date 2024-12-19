import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Vaam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

