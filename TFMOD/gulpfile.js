import gulp from "gulp";
import once from "gulp-once";
import webp from "gulp-webp";
const { task, src, dest } = gulp;

task("webp", () => src("src/images/**/*")
	.pipe(once())
	.pipe(webp({lossless: true}))
	.pipe(dest("static/images"))
);