import { DirectoryStyled } from "./directory.styles"

export const Directory = () => {
	return (
		<DirectoryStyled>
			<div class="directories">
				<p class="directories-title">CATE<span>GORIES</span></p>
				<div class="directory no-content">
				</div>
				<div class="directory">
					<img src="IMAGES/womens.png" alt=""/>
					<div class="directory-tag-div">
						<div class="directory-title">WOMEN</div>
						<button class="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div class="directory">
					<img src="IMAGES/sneakers.png" alt=""/>
					<div class="directory-tag-div">
						<div class="directory-title">SNEAKERS</div>
						<button class="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div class="directory">
					<img src="IMAGES/jackets.png" alt=""/>
					<div class="directory-tag-div">
						<div class="directory-title">JACKETS</div>
						<button class="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div class="directory">

					<img src="IMAGES/bags.jpg" alt=""/>
					<div class="directory-tag-div">
						<div class="directory-title">BAGS</div>
						<button class="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div class="directory">
					<img src="IMAGES/men.png" alt=""/>
					<div class="directory-tag-div">
						<div class="directory-title">MENS</div>
						<button class="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div class="directory">
					<img src="IMAGES/hats.png" alt=""/>
					<div class="directory-tag-div">
						<div class="directory-title">HATS</div>
						<button class="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div class="directory">
					<img src="IMAGES/dressed-up-kid.jpg" alt=""/>
					<div class="directory-tag-div">
						<div class="directory-title">KIDS</div>
						<button class="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div class="directory no-content">

				</div>

			</div>
		</DirectoryStyled>
	)
}