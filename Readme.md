# Namasete React

- The repository for namaste react course

## Notes

- ~ vs ^

  - ~ means that the version should be greater than or equal to the specified version.
  - ^ means that the version should be equal to the specified version or greater, but less than the next significant release above the specified version.

- package-lock.json

  - The purpose of the package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the future.
  - The integrity hash useful for security purposes. It ensures that the package has not been tampered with since the package was published.

- node_modules

  - The node_modules folder is where npm stores all the packages that it installs.
  - The node_modules folder is not committed to the repository. It is ignored by default.

- Transitive dependencies

  - A transitive dependency is a dependency of a dependency.
  - For example, if package A depends on package B, and package B depends on package C, then package C is a transitive dependency of package A.
