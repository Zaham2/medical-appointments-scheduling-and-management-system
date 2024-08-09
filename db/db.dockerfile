# Use the official PostgreSQL image as the base
FROM postgres:latest

# Set the environment variables
# ENV POSTGRES_PASSWORD=12345679
# ENV POSTGRES_USER=dev
# ENV POSTGRES_DB=medical_db

# # Expose the PostgreSQL port
# EXPOSE 5432

# Create a script to initialize the database
COPY init-db.sql /docker-entrypoint-initdb.d/

# Command to run when the container starts
CMD ["postgres"]
