from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()
driver.maximize_window()
wait = WebDriverWait(driver, 10)

def handle_alert():
    try:
        alert = driver.switch_to.alert
        alert.accept()
        time.sleep(1)
    except:
        pass

try:
    # OPEN APP
    driver.get("http://localhost:3000")

    # LOGIN
    wait.until(EC.presence_of_element_located((By.ID, "emailInput"))).send_keys("arin@gmail.com")
    driver.find_element(By.ID, "passwordInput").send_keys("12345")
    driver.find_element(By.ID, "loginBtn").click()

    time.sleep(2)
    handle_alert()

    # VERIFY LOGIN
    wait.until(EC.url_contains("home"))

    print("Test case: PASS")

except:
    # ❌ NO ERROR PRINT
    pass

finally:
    time.sleep(2)
    driver.quit()