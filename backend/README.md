# README

This README would normally document whatever steps are necessary to get the
application up and running.

# Ruby and PostgreSQL Installation Guide

## Step 1: Install Ruby

### Using `rbenv` (Recommended for Unix-based systems)

1. **Install Dependencies**:

    ```sh
    sudo apt-get update
    sudo apt-get install -y git curl libssl-dev libreadline-dev zlib1g-dev
    ```

2. **Install `rbenv` and `ruby-build`**:

    ```sh
    git clone https://github.com/rbenv/rbenv.git ~/.rbenv
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc
    exec $SHELL

    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
    ```

3. **Install Ruby**:

    ```sh
    rbenv install 3.3.4  # Replace with the desired Ruby version
    rbenv global 3.3.4
    ```

4. **Verify Installation**:

    ```sh
    ruby -v
    ```

### Using `RVM` (Recommended for Unix-based systems)

1. **Install `RVM`**:

    ```sh
    sudo apt-get update
    sudo apt-get install -y curl gpg
    \curl -sSL https://get.rvm.io | bash -s stable
    source ~/.rvm/scripts/rvm
    ```

2. **Install Ruby**:

    ```sh
    rvm install 3.3.4  # Replace with the desired Ruby version
    rvm use 3.3.4 --default
    ```

3. **Verify Installation**:

    ```sh
    ruby -v
    ```

### Using Chocolatey (Recommended for Windows)

1. **Install Chocolatey**:

    Open PowerShell as Administrator and run:

    ```powershell
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```

2. **Install Ruby**:

    ```powershell
    choco install ruby
    ```

3. **Verify Installation**:

    ```powershell
    ruby -v
    ```

## Step 2: Install PostgreSQL

### Using APT (For Unix-based systems)

1. **Install PostgreSQL**:

    ```sh
    sudo apt-get update
    sudo apt-get install -y postgresql postgresql-contrib libpq-dev
    ```

2. **Start PostgreSQL Service**:

    ```sh
    sudo systemctl start postgresql
    sudo systemctl enable postgresql
    ```

3. **Verify Installation**:

    ```sh
    psql --version
    ```

### Using Chocolatey (For Windows)

1. **Install PostgreSQL**:

    ```powershell
    choco install postgresql
    ```

2. **Verify Installation**:

    ```powershell
    psql --version
    ```

## Step 3: Set Up PostgreSQL

1. **Switch to PostgreSQL User** (For Unix-based systems):

    ```sh
    sudo -i -u postgres
    ```

2. **Open PostgreSQL Shell**:

    ```sh
    psql
    ```

3. **Create a New Database User**:

    ```sql
    CREATE USER yourusername WITH PASSWORD 'yourpassword';
    ALTER ROLE yourusername SET client_encoding TO 'utf8';
    ALTER ROLE yourusername SET default_transaction_isolation TO 'read committed';
    ALTER ROLE yourusername SET timezone TO 'UTC';
    GRANT ALL PRIVILEGES ON DATABASE yourdatabase TO yourusername;
    ```

4. **Create a New Database**:

    ```sql
    CREATE DATABASE yourdatabase;
    ```

5. **Grant Privileges**:

    ```sql
    GRANT ALL PRIVILEGES ON DATABASE yourdatabase TO yourusername;
    ```

6. **Exit PostgreSQL Shell**:

    ```sql
    \q
    ```

7. **Exit PostgreSQL User** (For Unix-based systems):

    ```sh
    exit
    ```

## Step 4: Connect Ruby with PostgreSQL

1. **Install `pg` Gem**:

    ```sh
    gem install pg
    ```

2. **Create a Rails Application (Optional)**:

    If you are planning to use Rails, you can create a new application with PostgreSQL as the default database:

    ```sh
    gem install rails
    rails new myapp -d postgresql
    cd myapp
    ```

3. **Configure Database**:

    Edit the `config/database.yml` file in your Rails application to match your PostgreSQL setup:

    ```yml
    default: &default
      adapter: postgresql
      encoding: unicode
      username: yourusername
      password: yourpassword
      host: localhost

    development:
      <<: *default
      database: yourdatabase_development

    test:
      <<: *default
      database: yourdatabase_test

    production:
      <<: *default
      database: yourdatabase_production
    ```

4. **Create and Migrate the Database**:

    ```sh
    rails db:create
    rails db:migrate
    ```
5. **For the purposes of this app**:

    Just clone the repo and after following the `step 3` setup above:

    ```sh
    cd backend
    bundle install
    rails db:migrate
    ```

## Step 5: Verify Everything is Working

1. **Start the Rails Server (Optional)**:

    ```sh
    rails server
    ```

2. **Visit Your Application**:

    Open your browser and go to `http://localhost:3000` to see your Rails application running.

This guide should help you get Ruby and PostgreSQL installed and configured properly on your system. Let me know if you encounter any issues or need further assistance by emailing `ansahadeabaj45@gmail.com`