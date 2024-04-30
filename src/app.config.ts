import type { VulkConfig } from '/@src/types'

/**
 * Set your default Navbar by importing a vue component
 * Note: If you rename the import, make sure to update the type definition bellow
 *
 * @example import Navbar from '/@src/components/blocks/navbar-blocks/NavbarA.vue'
 */
import Navbar from '/@src/components/navigation/navbar/Navbar.vue'

/**
 * Set your default Footer by importing a vue component
 * Note: If you rename the import, make sure to update the type definition bellow
 *
 * @example import Footer from '/@src/components/blocks/footer-blocks/FooterA.vue'
 */
import Footer from '/@src/components/layout/footer/Footer.vue'

// Auto detect the type of the imported components
type NavbarType = typeof Navbar
type FooterType = typeof Footer
type AppConfig = VulkConfig<NavbarType, FooterType>

/**
 * This is the main configuration file for the app
 */
export default {
  name: 'Vulk',
  title: 'Vulk - Vue 3 Landing Pages',
  description:
    'Vulk is a premium toolkit that lets you build powerful, SSR-Ready memorable websites.',
  theme: {
    // Auto detect system color scheme
    default: 'system',
    // Display the theme switcher
    toggle: true,
    // Disable transitions to avoid transition flickering when switching theme
    disableTransitions: true,
  },
  logo: {
    src: '/assets/logo/logo.svg',
    // srcDark: '/assets/logo/logo-dark.svg',
    width: 45,
    height: 45,
  },
  layout: {
    // Default page transition
    // @see /src/scss/utilities/_transitions.scss
    transition: 'fade-fast',
    backToTop: {
      // Display the back to top button
      enabled: true,
    },
    navbar: {
      enabled: true,
      component: Navbar,
      props: {
        // define default props for Navbar here, you can override them using page meta
        items: [
          {
            label: 'Home',
            to: '/',
          },
        ],
      },
    },
    footer: {
      enabled: true,
      component: Footer,
      props: {
        // define default props for Footer here, you can override them using page meta
        content: {
          links: [
            {
              label: 'Home',
              to: '/',
            },
          ],
        },
      },
    },
  },
} as AppConfig
