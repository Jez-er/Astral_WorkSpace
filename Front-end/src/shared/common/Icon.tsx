import { icons } from 'lucide-react'

interface IconProps {
	name: keyof typeof icons
	color?: string
	size?: string | number
	strokeWidth?: string | number
}

const Icon: React.FC<IconProps> = ({ name, color, size, strokeWidth }) => {
	const LucideIcon = icons[name]

	if (!LucideIcon) {
		return null
	}

	return (
		<LucideIcon
			color={color}
			size={size}
			strokeWidth={strokeWidth}
			absoluteStrokeWidth
		/>
	)
}

export default Icon
