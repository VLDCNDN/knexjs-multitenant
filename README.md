This for testing for nodejs MultiTenant

## Add migration to specific database and custom directory
`npx knex migrate:make add_credential --env db1 --cwd ./db/maindb `

## run migration
`npx knex migrate:latest --env db2 --cwd ./db/clientdb/`