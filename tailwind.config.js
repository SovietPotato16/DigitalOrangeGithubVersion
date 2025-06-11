/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#94a3b8',
            h1: {
              color: '#ffffff',
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              marginTop: '2rem'
            },
            h2: {
              color: '#ffffff',
              fontSize: '2rem',
              fontWeight: '600',
              marginBottom: '1.25rem',
              marginTop: '2rem'
            },
            h3: {
              color: '#ffffff',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
              marginTop: '1.5rem'
            },
            p: {
              color: '#94a3b8',
              fontSize: '1.125rem',
              lineHeight: '1.75',
              marginBottom: '1.5rem',
              textAlign: 'left'
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              marginBottom: '1.5rem',
              li: {
                color: '#94a3b8',
                marginBottom: '0.5rem',
                '&::marker': {
                  color: '#f97316'
                }
              }
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
              marginBottom: '1.5rem',
              li: {
                color: '#94a3b8',
                marginBottom: '0.5rem',
                '&::marker': {
                  color: '#f97316'
                }
              }
            },
            a: {
              color: '#f97316',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftColor: '#f97316',
              color: '#94a3b8',
              fontStyle: 'italic',
              marginLeft: 0,
              marginRight: 0,
              paddingLeft: '1rem',
            },
            code: {
              color: '#f97316',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '0.25rem',
              padding: '0.25rem 0.5rem',
            },
            pre: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '0.5rem',
              padding: '1rem',
              code: {
                backgroundColor: 'transparent',
                color: '#94a3b8',
                padding: 0,
              },
            },
            hr: {
              borderColor: 'rgba(255, 255, 255, 0.1)',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            strong: {
              color: '#ffffff',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
          },
        },
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require("@tailwindcss/typography")],
};
