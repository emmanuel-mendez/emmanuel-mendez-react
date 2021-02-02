import { usePathname } from './usePathname'

export const useRoute = (link) => {

	if (usePathname().startsWith("/es/")) {
		return `/es/${link}`
	} else {
		return `/${link}`
	}
}