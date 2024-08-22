import { BASE_URL } from '../../../shared/api'
import GitHubButton from './github_button'
import GoogleButton from './google_button'

const OAuth = () => {
	return (
		<div className='flex gap-3 mt-4'>
			<GoogleButton
				onClick={() => (window.location.href = `${BASE_URL}/oauth/google`)}
			/>
			<GitHubButton
				onClick={() => (window.location.href = `${BASE_URL}/oauth/github`)}
			/>
		</div>
	)
}

export default OAuth
