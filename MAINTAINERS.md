
# Maintainers

## Manual tasks
- At every Ember release, change `releases/release.hbs` in the top `let` block
- At LTS releases, update `releases/release.hbs` in the top `let` block and the Support Schedule table


## Where does dynamic data come from?

- Releases - The beta and canary all fetch their data
as json in the model hook of each route.