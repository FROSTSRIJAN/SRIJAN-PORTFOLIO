import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				glass: {
					bg: 'hsl(var(--glass-bg))',
					border: 'hsl(var(--glass-border))'
				},
				space: {
					blue: 'hsl(var(--space-blue))',
					purple: 'hsl(var(--space-purple))',
					cyan: 'hsl(var(--space-cyan))',
					pink: 'hsl(var(--space-pink))'
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'cosmic': 'var(--gradient-cosmic)',
				'nebula': 'var(--gradient-nebula)',
				'aurora': 'var(--gradient-aurora)',
				'hero-gradient': 'var(--gradient-hero)',
				'card-gradient': 'var(--gradient-card)'
			},
			boxShadow: {
				'glow-primary': 'var(--glow-primary)',
				'glow-secondary': 'var(--glow-secondary)',
				'glow-accent': 'var(--glow-accent)',
				'cosmic': 'var(--shadow-cosmic)',
				'deep': 'var(--shadow-deep)',
				'glass': 'var(--glass-shadow)'
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					from: { opacity: '0', transform: 'translateX(100px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.9)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'float-3d': {
					'0%, 100%': { transform: 'translateY(0) rotateX(0deg) rotateY(0deg)' },
					'33%': { transform: 'translateY(-10px) rotateX(5deg) rotateY(5deg)' },
					'66%': { transform: 'translateY(-5px) rotateX(-2deg) rotateY(-3deg)' }
				},
				'cosmic-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 20px hsl(var(--primary) / 0.5)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						boxShadow: '0 0 40px hsl(var(--primary) / 0.8), 0 0 80px hsl(var(--accent) / 0.4)'
					}
				},
				'hologram': {
					'0%, 100%': { filter: 'hue-rotate(0deg)' },
					'25%': { filter: 'hue-rotate(90deg)' },
					'50%': { filter: 'hue-rotate(180deg)' },
					'75%': { filter: 'hue-rotate(270deg)' }
				},
				'particle-float': {
					'0%': { 
						transform: 'translateY(100vh) translateX(-50px) rotate(0deg)',
						opacity: '0'
					},
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { 
						transform: 'translateY(-100px) translateX(50px) rotate(360deg)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'float-3d': 'float-3d 6s ease-in-out infinite',
				'cosmic-pulse': 'cosmic-pulse 4s ease-in-out infinite',
				'hologram': 'hologram 3s ease-in-out infinite',
				'particle-float': 'particle-float 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
