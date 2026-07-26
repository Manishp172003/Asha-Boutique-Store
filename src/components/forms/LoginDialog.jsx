import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const LoginDialog = ({ open, onOpenChange, onSubmit, loading }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[#F6F2EE] border-none rounded-[22px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#2B1E1A]">Welcome Back</DialogTitle>
          <DialogDescription className="text-[#7A655D]">
            Sign in to access your account and view your orders.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#2B1E1A]">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              className="bg-white border-[#E9E3DD] rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#2B1E1A]">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="bg-white border-[#E9E3DD] rounded-xl"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[#7A655D]">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <button type="button" className="text-[#E46A53] hover:underline">
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E46A53] hover:bg-[#d55a43] text-white rounded-full py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>

          <div className="text-center text-sm text-[#7A655D]">
            Don't have an account?{' '}
            <button type="button" className="text-[#E46A53] hover:underline">
              Sign up
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
