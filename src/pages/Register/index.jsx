import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { register } from '../../services/authService'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AuthLayout from '../../components/auth/AuthLayout'
import AuthCard from '../../components/auth/AuthCard'
import AuthHeader from '../../components/auth/AuthHeader'
import '../../components/auth/auth.css'

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      await register(formData.email, formData.password, formData.name)
      toast.success('Account created successfully!')
      navigate('/')
    } catch (error) {
      toast.error(error.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader 
          title="Join Asha Boutique"
          subtitle="Experience curated fashion tailored for you."
        />

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <Label htmlFor="name" className="text-[#2D211C]">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="bg-white border-[#E9E3DD] rounded-xl"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="email" className="text-[#2D211C]">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="bg-white border-[#E9E3DD] rounded-xl"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="password" className="text-[#2D211C]">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="bg-white border-[#E9E3DD] rounded-xl"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="confirmPassword" className="text-[#2D211C]">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="bg-white border-[#E9E3DD] rounded-xl"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C77057] hover:bg-[#b66047] text-white rounded-full py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>

          <div className="auth-footer">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/')}
            >
              Sign In
            </button>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default Register;