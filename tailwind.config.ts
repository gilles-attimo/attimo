import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,ts,tsx,html,md,mdx,jsx,js}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1400px',
			'3xl': '1440px',
		},
		extend: {
			width: {
				'128': '32rem',
				'141': '35.2rem',
				'154': '38.5rem',
				'160': '40rem',
				'169': '42.35rem',
				'192': '48rem'
			},
			height: {
				'128': '32rem',
				'141': '35.2rem',
				'154': '38.5rem',
				'160': '40rem',
				'169': '42.35rem',
				'192': '48rem'
			},
		fontFamily: {
			'sans': ['Space Grotesk', 'Inter', 'sans-serif'],
			'calluna': ['Caladea', 'Cormorant Garamond', 'serif'],
			'canula': ['Playfair Display', 'Cormorant Garamond', 'serif'],
			'display': ['Playfair Display', 'serif'],
			'body': ['Space Grotesk', 'Inter', 'sans-serif'],
			'working-man': ['UDC Working Man Sans', 'sans-serif'],
			'working-man-light': ['UDC Working Man Sans Light', 'sans-serif'],
			'working-man-rough': ['UDC Working Man Sans Rough', 'sans-serif'],
			'beverly': ['Beverly Drive', 'cursive'],
		},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				olive: {
					dark: 'hsl(var(--olive-dark))',
					medium: 'hsl(var(--olive-medium))',
					light: 'hsl(var(--olive-light))',
					bright: 'hsl(var(--olive-bright))'
				},
				gold: {
					rich: 'hsl(var(--gold-rich))',
					light: 'hsl(var(--gold-light))'
				},
				cream: 'hsl(var(--cream))',
				"golden-text": "hsl(var(--golden-text))",
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'marquee': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'testimonial-scroll': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'marquee': 'marquee 10s linear infinite',
				'testimonial-scroll': 'testimonial-scroll 40s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
