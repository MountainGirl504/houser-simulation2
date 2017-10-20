INSERT INTO listings (
      property_name
    , property_description
    , address
    , city
    , state
    , zip
    , img_url
    , loan_amount
    , monthly_mortgage
    , desired_rent)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING *;